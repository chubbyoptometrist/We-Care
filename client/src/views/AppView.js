var AppView = Backbone.View.extend({
  el: '<div style="width: 100%">' +
      '  <h1 class="title">We&nbsp;&nbsp;&nbsp;care' +
          '<img class="heart" src="/src/img/heart.png">' +
          '<div class="title-line"></div>' +
      '  </h1>' +
      //'  <span class="title-line"></span>' + 
      //'  <img class="heart" src="/src/img/heart.png">' +
      '</div>',

  //the initialize function delegates ALL the DOM rendering
  initialize: function() {
    //these are the views that make up the layout
    this.mapView = new MapView({
      model: this.model.get('mapModel')
    });

    //mapView must be rendered after the layout because the Datamap must attach to an already-rendered DOM element
    this.render();
    this.mapView.render();
  },

  render: function() {
    $('body').html(
      this.$el.append([
        this.mapView.el,
        //this.articleView.el
      ])
    );
  }
});
