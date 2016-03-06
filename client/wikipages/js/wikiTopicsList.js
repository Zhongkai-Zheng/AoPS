if(Meteor.isClient){
	
	Template.wikiTopicsList.helpers({
		WikiTopics: function(){
			return WikiTopics;
		}
});

	Template.wikiTopicsList.helpers({
    	settings: function () {
        return {
            collection: collection,
            rowsPerPage: 10,
            showFilter: true,
            fields: [
            		{ key: 'year', label: 'Year', sortOrder: 0, sortDirection: 'descending' },
    				{ key: 'name',  label: 'Name', sortOrder: 1, sortDirection: 'ascending'}
            ]
        };
    }
});



}
