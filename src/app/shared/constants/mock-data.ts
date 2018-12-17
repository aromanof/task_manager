import { MembersInterface } from "../interfaces/members-interface";
import { CardInterface } from "../interfaces/card-interface";

export const mockMembers: MembersInterface[] = 
    [
        {
            name: 'Alex',
            photo: '../assets/users/alex.jpg',
            role: 'developer'
        },
        {
            name: 'Peter',
            role: 'designer',
        },
        {
            name: 'Artem',
            role: 'developer',
            photo: '../assets/users/artem.jfif',
        }
    ];

export const mockCards: CardInterface[] = [
    {
        name: 'BackLog',
        tasks: [
            {
                taskName: 'create layout',
                taskPriority: 'high',
                assignee: mockMembers[0],
            },
            {
                taskName: 'design front page',
                taskPriority: 'high',
                assignee: mockMembers[1],
            },
            {
                taskName: 'design new logo',
                taskPriority: 'medium',
                assignee: mockMembers[1],
            },
        ]
    },
    {
        name: 'In Progress',
        tasks: [
            {
                taskName: 'do some stuff',
                taskPriority: 'high',
                assignee: mockMembers[2],
            },
            {
                taskName: 'do another stuff',
                taskPriority: 'low',
                assignee: mockMembers[1],
            },
            {
                taskName: 'not giving a shit',
                taskPriority: 'high',
                assignee: mockMembers[0],
            },
        ]
    }
];