import './queryLoader.css'

const QueryLoader = ({ children, fetchError, fetching }) => {

	return (
		<div>
			<div>{fetching && `Data is loading...`}</div>
			<div>{fetchError && `Opps, we have error...: ${fetchError}`}</div>

			{

				(!fetchError && !fetching) && children
			}
		</div>
	)
};

export default QueryLoader;
