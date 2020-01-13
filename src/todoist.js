import moment from 'moment'

function Todoist() {
  const that = this
  that.data = {}

  that.sync = function(data) {
    that.data = data
    that.data = syncPostProcess(data)
  }

  that.getHomePage = function(home) {
    if (home === 'overdue, today') {
      return 'today'
    } else if (home === 'overdue, 7 days') {
      return 'week'
    }
    return home.replace(':', '/')
  }

  // TODO: move to item() creation
  const syncPostProcess = function(dt) {
    const data = dt
    if (data.labels) {
      data.labels = data.labels.sort(function(a, b) {
        return a.item_order - b.item_order
      })
    }
    if (data.labels) {
      let labels = []
      for (let i = 0; i < data.labels.length; i++) {
        let label = { ...data.labels[i] }
        label.items = data.items.filter(i => i.labels.includes(label.id))
        labels.push(label)
      }
      data.labels = labels
    }
    if (data.projects) {
      let projects = []
      for (let i = 0; i < data.projects.length; i++) {
        let project = { ...data.projects[i] }
        if (i > 0 && project.parent_id === projects[i - 1].id) {
          project.subProjectsChain = projects[i - 1].subProjectsChain.concat(
            project.name
          )
        } else if (project.parent_id) {
          const parent = projects.find(p => p.id === project.parent_id)
          project.subProjectsChain = parent.subProjectsChain.concat(
            project.name
          )
        } else {
          project.subProjectsChain = [project.name]
        }
        project.items = data.items.filter(i => i.project_id === project.id)
        projects.push(project)
      }
      data.projects = projects
    }
    if (data.items) {
      let items = []
      for (let i = 0; i < data.items.length; i++) {
        let item = { ...data.items[i] }
        item.due_days = item.due_date_utc
          ? moment(item.due.date).diff(moment(), 'days')
          : null
        item.projectName = data.projects.find(
          p => p.id === item.project_id
        ).name
        item.labelNames = item.labels.map(
          labelId => data.labels.find(l => l.id === labelId).name
        )
        item.subProjectsChain = data.projects.find(
          p => p.id === item.project_id
        ).subProjectsChain
        item.notes = data.notes.filter(n => n.item_id === item.id)
        items.push(item)
      }

      items = items.sort(function(a, b) {
        const d = a.due_days - b.due_days
        if (d !== 0) {
          return d
        }

        return b.priority - a.priority
      })
      data.items = items
    }
    return data
  }

  const uuid = {
    gen: function() {
      // Boilerplate code form http://stackoverflow.com/a/8809472/6539400
      let d = new Date().getTime()
      if (window.performance && typeof window.performance.now === 'function')
        d += performance.now() //use high-precision timer if available
      const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g,
        function(c) {
          const r = (d + Math.random() * 16) % 16 | 0
          d = Math.floor(d / 16)
          return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
        }
      )
      return uuid
    },
    test: function(str) {
      // http://stackoverflow.com/a/13653180/6539400
      if (typeof str !== 'string') return false
      return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
        str.toLowerCase()
      )
    },
  }

  function getArgsObject(args, op) {
    return [
      {
        type: op,
        temp_id: uuid.gen(),
        uuid: uuid.gen(),
        args: args,
      },
    ]
  }

  that.itemOperation = function(operation, args, callback) {
    const operations = function(op) {
      switch (op) {
        case 'item_move':
          return {
            project_items: { [args.item.project_id]: [args.item.id] },
            to_project: args.toId,
          }
        case 'item_add':
          return args.item
        case 'item_update':
          return args.item
        case 'item_close':
          return { id: args.id }
        case 'item_delete':
          return { ids: [args.id] }
        default:
          return {}
      }
    }
    return getArgsObject(operations(operation), operation)
  }

  that.getNextWeekDate = function() {
    const setDays = [1, 1, 4, 4, 4, 8, 8]
    return moment().day(setDays[moment().day()])
  }

  // ITEMS

  // TODO: move to project()
  that.getProjectById = function(id) {
    return (
      that.data &&
      that.data.projects.find(function(project) {
        return project.id === id
      })
    )
  }

  // TODO: move to project()
  const getProjectOrderByProjectId = function(projectId) {
    return that.data.projects.find(function(p) {
      return p.id === projectId
    }).item_order
  }

  // TODO: move to project()
  that.getInboxId = function() {
    return that.data && that.data.projects[0].id
  }

  // LABELS

  // TODO: move to label()
  that.getLabelByName = function(name) {
    return that.data.labels.find(function(label) {
      return label.name === name
    })
  }

  // TODO: move to label()
  that.getLabelItemsById = function(id) {
    return that.data.items.filter(function(item) {
      const isInItemLabels = item.labels.includes(id)
      return isInItemLabels
    })
  }

  // FILTERS

  // TODO: move to filters()
  that.getFilters = function() {
    return that.data.filters
  }

  // ITEMS HELPER FILTERS

  // TODO: move to items()
  that.getSpecificDueDateItems = function(date) {
    const items = that.data && that.data.items
    return (
      items &&
      items.filter(function(item) {
        return (
          new Date(item.due_date_utc).toLocaleDateString() ===
          date.toLocaleDateString()
        )
      })
    )
  }

  // TODO: move to items()
  that.getTodayItems = function() {
    return that.getSpecificDueDateItems(new Date())
  }

  const getDayByDate = function(date) {
    const diff = moment().diff(date, 'days')
    switch (Math.abs(diff)) {
      case undefined:
        return ''
      case 0:
        if (moment().format('D') !== moment(date).format('D')) {
          return 'Tom'
        }
        return 'Tod'
      case 1:
        return 'Tom'
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        return moment(date).format('ddd')
      default:
        return moment(date).format('D MMM')
    }
  }

  that.getNextDaysItems = function(days) {
    const date = new Date()
    date.setSeconds(date.getSeconds() + 10)
    const weekItems = []
    for (let i = 0; i < days; i++) {
      const dayItems = that.getSpecificDueDateItems(date)
      const weekDay = {
        date: new Date(date),
        items: dayItems,
        str: getDayByDate(date),
      }
      weekItems.push(weekDay)
      date.setDate(date.getDate() + 1)
    }
    return weekItems
  }

  that.sortFilterItems = function(items) {
    return items.sort(function(a, b) {
      const p = b.priority - a.priority
      if (p !== 0) {
        return p
      }

      const d = new Date(b.due_date_utc) - new Date(a.due_date_utc)
      if (d !== 0) {
        return d
      }

      const i =
        getProjectOrderByProjectId(a.project_id) -
        getProjectOrderByProjectId(b.project_id)
      if (i !== 0) {
        return i
      }

      return a.item_order - b.item_order
    })
  }

  // FILTER HELPERS

  const getConditionObject = function(str) {
    let pos = 0
    let par = 0
    let ch
    let operation
    let comp = ''
    let components = []
    let s = str

    do {
      ch = s[pos]
      switch (ch) {
        case '(':
          if (par > 0) {
            comp += ch
          }
          par++
          break
        case ')':
          par--
          if (par === 0) {
            components.push(getConditionObject(comp))
            comp = ''
            break
          }
          comp += ch
          break
        case '&':
        case '|':
          if (par === 0) {
            if (comp.trim() !== '') {
              components.push(comp.trim())
              comp = ''
            }
            operation = ch
            break
          }
          comp += ch
          break
        default:
          comp += ch
          break
      }
      pos++
    } while (pos !== s.length)
    if (comp !== '') {
      components.push(comp.trim())
    }
    if (!operation) {
      return components[0]
    } else {
      return { operation: operation, components: components }
    }
  }

  const isItemInFilterComponent = function(item, comp) {
    let reg = /(\!?[#@]*)(\d*\s*.+)/g
    const match = reg.exec(comp)
    let prefix
    let name
    if (match[1]) {
      prefix = match[1]
      name = match[2]
      reg = new RegExp(`${name.replace('*', '.*')}`)
      switch (prefix) {
        case '#':
          return item.projectName.match(reg)
        case '!#':
          return !item.projectName.match(reg)
        case '##':
          return item.subProjectsChain.some(p => p.match(reg))
        case '!##':
          return !item.subProjectsChain.some(p => p.match(reg))
        case '@':
          return item.labelNames.some(label => label === name)
        case '!@':
          return !item.labelNames.some(label => label === name)
        default:
          return false
      }
    } else {
      switch (comp) {
        case 'tod':
        case 'today':
          return true
        default:
          return false
      }
    }
  }

  const isItemMatchingCondition = (item, condition) => {
    let left, right
    if (typeof condition.components[0] === 'string') {
      left = isItemInFilterComponent(item, condition.components[0])
    } else {
      left = isItemMatchingCondition(item, condition.components[0])
    }
    if (typeof condition.components[1] === 'string') {
      right = isItemInFilterComponent(item, condition.components[1])
    } else {
      right = isItemMatchingCondition(item, condition.components[1])
    }
    if (condition.operation === '&') {
      return left && right
    }
    return left || right
  }

  that.getFilterItems = (items, query) => {
    let queries = JSON.parse(`["${query.split(',').join('","')}"]`)

    const conditions = queries.map(q => {
      const condition = getConditionObject(q)
      let filteredItems = []
      if (typeof condition === 'string') {
        filteredItems = items.filter(item =>
          isItemInFilterComponent(item, condition)
        )
      } else {
        filteredItems = items.filter(item =>
          isItemMatchingCondition(item, condition)
        )
      }
      return {
        condition,
        query: q,
        items: filteredItems,
      }
    })

    return conditions
  }
}

const app = new Todoist()
export default app
