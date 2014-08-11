/**
 * Created by geronimo on 8/10/14.
 */
app.service('TopicsSrv', function TopicsSrv(){
    var general = [
        { id: '000', name: 'I.T.'},
        { id: '010', name: 'Music'},
        { id: '020', name: 'Sports'},
        { id: '030', name: 'Comics'},
        { id: '040', name: 'Arts'}
    ];

    var sub = {
        '000' : [
            { id: '001', name: 'Computer Vision'},
            { id: '002', name: 'Computer Graphics'},
            { id: '003', name: 'Programming'},
            { id: '004', name: 'AI'}
        ],
        '010' : [
            { id: '011', name: 'Metal'},
            { id: '012', name: 'Rock'}
        ],
        '020' : [
            { id: '021', name: 'Football'},
            { id: '022', name: 'Basketball'},
            { id: '023', name: 'Tenis'},
            { id: '024', name: 'Rugby'}
        ],
        '030' : [
            { id: '031', name: 'Superman', group: 'DC'},
            { id: '032', name: 'Batman', group: 'DC'},
            { id: '033', name: 'Aquaman', group: 'DC'},
            { id: '034', name: 'Dragon ball', group: 'Shueisha'},
            { id: '035', name: 'Saint Seiya', group: 'Shueisha'},
            { id: '036', name: 'Sailor Moon', group: 'Kodansha'},
            { id: '037', name: 'Green Lanter', group: 'DC'},
            { id: '038', name: 'Evangelion', group: 'Kadokawa Shoten'}
        ],
        '040' : [
            { id: '041', name: 'The Romantic'},
            { id: '042', name: 'Baroque'},
            { id: '043', name: 'Surrealism'},
            { id: '044', name: 'Post Modern'}
        ]
    };

    this.getGeneralTopics = function(){
        return general;
    };

    this.getSubTopics = function(){
        return sub;
    };
});