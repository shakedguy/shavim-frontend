import Icon from '@mui/material/Icon';

const GenericIcon = ({ name, color, classes }) => {
	return (
		<Icon
			style={{ color: color }}
			baseClassName={'material-icons-round'}
		>
			{name}
		</Icon>
	);
};

export default GenericIcon;
