export default {
	posts: [],	
	workers: [
		{
			id: '434536565564',
			firstName: 'Андрей',
			lastName: 'Васильков',
			patronymic: 'Владимирович',
			payment: 100,
			seatNumber: 1,
			lunchTimeAtBegin: new Date(),
			lunchTimeAtEnd: new Date(),
			isWorker: true
		},
		{
			id: '6345635436354',
			firstName: 'Зинаида',
			lastName: 'Тюмина',
			patronymic: 'Николаевна',
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
			firstName: 'Леонид',
			lastName: 'Шмель',
			patronymic: 'Степанович',
			welcomTimeAtBegin: new Date(),
			welcomTimeAtEnd: new Date(),
			isManager: true
		},
		{
			id: '345436576765',
			firstName: 'Дмитрий',
			lastName: 'Ганин',
			patronymic: 'Андреевич',
			welcomTimeAtBegin: new Date(),
			welcomTimeAtEnd: new Date(),
			isManager: true
		}
	],
	ajaxCallsInProgress: 0
};