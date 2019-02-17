var mod = angular.module('tvchat.services.showService', []);


mod.service('ShowsService', function () {

	var self = {
		getShow: function (showId) {
			return _.find(self.shows, {"showid": showId});
		},
		shows: [
			{
				"showid": 28416,
				"link": "http://tvrage.com/2_Broke_Girls",
				"name": "Cobra Kai (YouTube Premium)",
				"classification": "Scripted",
				"country": "US",
				"image": "https://assets3.thrillist.com/v1/image/2770203/size/tmg-article_tall.jpg",
				"genres": [
					"Comedy"
				],
				"network": "Youtube"
			},
			{
				"showid": 38584,
				"link": "http://tvrage.com/american-crime-2014",
				"name": "Daredevil (2015)",
				"classification": "Scripted",
				"country": "US",
				"image": "http://www.gstatic.com/tv/thumb/tvbanners/15981357/p15981357_b_v8_ab.jpg",
				"genres": [
					"Action",
					"Drama",
					"Horror"
				],
				"network": "Netflix"
			},
			{
				"showid": 40136,
				"link": "http://tvrage.com/another-period",
				"name": "The Punisher (2017)",
				"classification": "Scripted",
				"country": "US",
				"image": "https://m.media-amazon.com/images/M/MV5BMjQzMTE1NjQwNl5BMl5BanBnXkFtZTgwNTM0NjM5MjI@._V1_UX182_CR0,0,182,268_AL_.jpg",
				"genres": [
					"Action",
					"Drama"
				],
				"network": "Netflix"
			},
			{
				"showid": 41728,
				"link": "http://tvrage.com/aquarius",
				"name": "The Good Fight",
				"classification": "Scripted",
				"country": "US",
				"image": "https://pmcvariety.files.wordpress.com/2016/12/thegoodfightthumbnail.jpg?w=1000&h=563&crop=1",
				"genres": [
					"Crime",
					"Drama"
				],
				"network": "NBC.com"
			},
			{
				"showid": 30715,
				"link": "http://tvrage.com/Arrow",
				"name": "Barry",
				"classification": "Scripted",
				"country": "US",
				"image": "https://m.media-amazon.com/images/M/MV5BMjQyNDk0NTIyMl5BMl5BanBnXkFtZTgwOTQ2Nzg4NDM@._V1_UX182_CR0,0,182,268_AL_.jpg",
				"genres": [
					"Comedy",
					"Drama"
				],
				"network": "HBO"
			},
			{
				"showid": 30716,
				"link": "http://tvrage.com/Arrow",
				"name": "Ozark",
				"classification": "Scripted",
				"country": "US",
				"image": "https://otakukart.com/wp-content/uploads/2018/09/Ozark-News-Updates.jpg",
				"genres": [
						"Drama",
						"Crime"

				],
				"network": "HBO"
			}
		]
	};
	return self;
});
