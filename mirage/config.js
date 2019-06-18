import Mirage from 'ember-cli-mirage'

export default function() {
    this.namespace = 'api';
    this.loadFixtures();
    this.timing = 400; // simulate network delay

    this.get('/lists', function(schema, request) {
        return schema.lists.all();
    });

    // this.get('/lists/:id', function(schema, request) {
    //     const id = request.params.id;
    //     return Mirage.response(200, {}, schema.lists.todos.find(id));
    //     debugger
    // });

    // this.post('/todos');
}
// export default function () {
//   this.namespace = '/api';

//   this.get('/todo-lists', function() {
//     return [
//       "data": {
//         "type": "todo-list",
//         "id": "1",
//         "attributes": {


//           "title": "Home tasks",
//         },
//         "relationships": {
//           "tasks": {
//             "data": [{

//               "id": '11',
//               "title": 'Clean the garage',
//               "status": "true"
//             },
//             {
//               "id": '12',
//               "title": 'Do laundry',
//               "status": "false"
//             },
//             {
//               "id": '13',
//               "title": 'Make dinner',
//               "status": "false"
//             },

//             ]
//           }
//         },
//       },
//     ]
//   }
// )}
//       // {
//       //   id: "2",
//       //   type: "todo-list",
//       //   attributes: {
//       //     title: "Works tasks",

//       //     tasks: [
//       //       {
//       //         id: '21',
//       //         title: 'Create the spreadsheet',
//       //         status: false
//       //       },
//       //       {
//       //         id: '22',
//       //         title: 'Presentation for meeting at 3PM',
//       //         status: false
//       //       },
//       //       {
//       //         id: '23',
//       //         title: 'Update project info',
//       //         status: false
//       //       },
//       //     ]
//       //   }
//       // },
//       // {
//       //   id: "3",
//       //   type: "todo-list",
//       //   attributes: {
//       //     title: "Not to forget this week",

//       //     tasks: [
//       //       {
//       //         id: '31',
//       //         title: 'Call consulate',
//       //         status: false
//       //       },
//       //       {
//       //         id: '32',
//       //         title: 'Pick up parents from airport',
//       //         status: false
//       //       },
//       //       {
//       //         id: '33',
//       //         title: 'Hire cleaner service',
//       //         status: false
//       //       },
//       //     ]
//       //   }
//       // }