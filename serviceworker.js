// big thank you to Matthew Cranford for the tutorial on Service Workers


const cacheName = 'app-v1';
const urlsToCache = [
	'/',
	'index.html',
	'css/styles.css',
	'data/restaurants.json',
	'img/1.jpg',
	'img/2.jpg',
	'img/3.jpg',
	'img/4.jpg',
	'img/5.jpg',
	'img/6.jpg',
	'img/7.jpg',
	'img/8.jpg',
	'img/9.jpg',
	'img/10.jpg',
	'js/dbhelper.js',
	'js/main.js',
	'js/restaurant_info.js'
];
self.addEventListener('install', event => {
	event.waitUntil(caches.open(cacheName)
	.then(cache => {
		return cache.addAll(urlsToCache)
	}));
});

self.addEventListener('fetch', event => {
	event.respondWith(caches.match(event.request)
	.then(response => {
		if(response) {
			return response;
		}
		else {
			return fetch(event.request);
		}
	}));
});