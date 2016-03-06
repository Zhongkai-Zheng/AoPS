Template.searchBox.events({
  "keyup #search-box": function(ev) {
    Session.set('search-box', $(ev.target).val());
  }
});