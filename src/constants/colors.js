export default {
	BLACK: '#3d3d3d',
	WHITE: '#ffffff',
	GREY_LIGHTEST: '#fafafa',
}

export const getPriorityColors = prio => {
	const colors = {
		4: {
			background: '#fceded',
			border: '#de4c4a',
		},
		3: {
			background: '#fef5e7',
			border: '#f49c18',
		},
		2: {
			background: '#ecf1fb',
			border: '#4073d6',
		},
		1: {
			background: '#fff',
			border: '#c1c1c1',
		},
	}
	return colors[prio]
}

export const getItemColor = color => {
	const itemColors = {
		30: '#b8255f',
		40: '#96c3eb',
		31: '#db4035',
		41: '#4073ff',
		32: '#ff9933',
		42: '#884dff',
		33: '#fad000',
		43: '#af38eb',
		34: '#afb83b',
		44: '#eb96eb',
		35: '#7ecc49',
		45: '#e05194',
		36: '#299438',
		46: '#ff8d85',
		37: '#6accbc',
		47: '#808080',
		38: '#158fad',
		48: '#b8b8b8',
		39: '#14aaf5',
		49: '#ccac93',
	}
	return itemColors[color]
}
