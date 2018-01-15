//polyfills from developer.mozilla.org

  if (!String.prototype.includes) {
    String.prototype.includes = function(search, start) {
      'use strict';
      if (typeof start !== 'number') {
        start = 0;
      }

      if (start + search.length > this.length) {
        return false;
      } else {
        return this.indexOf(search, start) !== -1;
      }
    };
  }

  if (!Array.prototype.filter)
  Array.prototype.filter = function(func, thisArg) {
    'use strict';
    if ( ! ((typeof func === 'Function' || typeof func === 'function') && this) )
        throw new TypeError();

    var len = this.length >>> 0,
        res = new Array(len), // preallocate array
        t = this, c = 0, i = -1;
    if (thisArg === undefined)
      while (++i !== len)
        // checks to see if the key was set
        if (i in this)
          if (func(t[i], i, t))
            res[c++] = t[i];
    else
      while (++i !== len)
        // checks to see if the key was set
        if (i in this)
          if (func.call(thisArg, t[i], i, t))
            res[c++] = t[i];

    res.length = c; // shrink down array to proper size
    return res;
  };

var yes = "YES";
var no = "NO";

var ChannelViewModel = function(name, id, dtv, sling, hulu, youtube, vue, standalone)
{
    var self = this;

    self.name = ko.observable(name);
    self.id = ko.observable(id);

    self.dtv = ko.observable(dtv);
    self.sling = ko.observable(sling);
    self.hulu = ko.observable(hulu);
    self.youtube = ko.observable(youtube);
    self.vue = ko.observable(vue);
    self.standalone = ko.observable(standalone);

    self.hasDtv = ko.computed(function() {
        return (this.dtv() || false) ? yes : no;
    }, self);

    self.hasSling = ko.computed(function() {
        return (this.sling() || false) ? yes : no;
    }, self);

    self.hasHulu = ko.computed(function() {
        return (this.hulu() || false) ? yes : no;
    }, self);

    self.hasYoutube = ko.computed(function() {
        return (this.youtube() || false) ? yes : no;
    }, self);

    self.hasVue = ko.computed(function() {
        return (this.vue() || false) ? yes : no;
    }, self);

    self.hasStandalone = ko.computed(function() {
        return (this.standalone() || false) ? yes : no;
    }, self);
};

var ServiceViewModel = function(name, id, url, note)
{
    var self = this;

    self.name = ko.observable(name);
    self.id = ko.observable(id);
    self.url = ko.observable(url);
    self.note = ko.observable(note);
};

var ChannelLineupViewModel = function()
{
    var self = this;

    self.services = ko.observableArray([]);
    self.channels = ko.observableArray([]);

    self.filter = ko.observable("");

    self.normalizedFilter = ko.computed(function() {
        if (this.filter() === 'undefined' ||
            this.filter().trim() == "")
        {
            return "";
        }

        return this.filter().toLowerCase();
    }, self);

    self.filteredChannels = ko.computed(function() {
        if (this.filter() === 'undefined' ||
            this.filter().trim() == "")
        {
            return this.channels();
        }


        return this.channels().filter(function(c) {
            return c.name().toLowerCase().includes(this.normalizedFilter()) ||
                    c.id().toLowerCase().includes(this.normalizedFilter());
        }, this);
    }, self);
};


var lineup = new ChannelLineupViewModel();

$(document).ready(function() {

    ko.applyBindings(lineup);

    $.ajax({
        url: "/data/data.json",
        method: "GET",
        async: true,
        cache: false,
        dataType: 'json',
        success: function(data) {
            var newServices = [];
            for (var i in data.services)
            {
                var serviceData = data.services[i];
                var newService = new ServiceViewModel(serviceData.name, serviceData.id, serviceData.url, serviceData.note || "");
                newServices.push(newService);
            }

            var newChannels = [];
            for (var i in data.channels)
            {
                var channelData = data.channels[i];
                var newChannel = new ChannelViewModel(channelData.name, channelData.id, channelData.dtv, channelData.sling, channelData.hulu, channelData.youtube, channelData.vue, channelData.standalone);
                newChannels.push(newChannel);
            }

            newChannels.sort(function(a, b) {
                return a.id().localeCompare(b.id());
            });

            lineup.services(newServices);
            lineup.channels(newChannels);
        },
    });
});