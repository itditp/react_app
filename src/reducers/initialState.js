export default {
	posts: [],	
	workers: [
		{
			id: '434536565564',
			firstName: 'Dory',
			lastName: 'Mouse',
			patronymic: 'Boby',
			payment: 100,
			seatNumber: 1,
			lunchTimeAtBegin: new Date(),
			lunchTimeAtEnd: new Date(),
			isWorker: true
		},
		{
			id: '6345635436354',
			firstName: 'Cory',
			lastName: 'House',
			patronymic: 'Doby',
			payment: 200,
			seatNumber: 2,
			lunchTimeAtBegin: new Date(),
			lunchTimeAtEnd: new Date(),
			isWorker: true
		}
	],
	managers: [
		{
			id: '7647575647457654',
			firstName: 'Fory',
			lastName: 'Rouse',
			patronymic: 'Voby',
			welcomTimeAtBegin: new Date(),
			welcomTimeAtEnd: new Date(),
			isManager: true
		},
		{
			id: '345436576765',
			firstName: 'Billy',
			lastName: 'Sato',
			patronymic: 'Vigi',
			welcomTimeAtBegin: new Date(),
			welcomTimeAtEnd: new Date(),
			isManager: true
		}
	],
	ajaxCallsInProgress: 0
};