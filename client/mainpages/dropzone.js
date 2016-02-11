Template.dropzone.events({
  'dropped #dropzone': function(e) {
    toastr.success('dropped a file');
  }
});