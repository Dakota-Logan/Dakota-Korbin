import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from '../router/index'
import AuthService from '../AuthService'

Vue.use(Vuex);

//Allows axios to work locally or live
let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/';

let api = Axios.create({
	baseURL: base + "api/",
	timeout: 3000,
	withCredentials: true
})

export default new Vuex.Store({
	state: {
		user: {},
		boards: [],
		lists: [],
		tasks: [],
		comments: [],
		activeBoard: {},
		activeList: {},
		modalObj: {
			addComment: false,
			editComment: false,
			addList: false,
			editList: false,
			addTask: false,
			editTask: false,

		}
	},
	mutations: {
		setUser(state, user) {
			state.user = user
		},

		setAll(state, payload) {
			state[payload.address] = payload.data;
		},

		setOne(state, payload) {
			state[payload.address] = payload.data;
		},

		addOne(state, payload) {
			state[payload.address].push(payload.data);
			console.log(state[payload.address])
		},

		removeOne(state, payload) {
			state[payload.address] = state[payload.address].filter(
				cur => cur.id === payload.data
			)
		},

		resetState(state) {
			state = {
				user: {},
				boards: [],
				activeBoard: {},
				modalObj: {
					addComment: false,
					editComment: false,
					addList: false,
					editList: false,
					addTask: false,
					editTask: false,

				}
			};
		},

		setModalType(state, payload) {
			// console.log(state.modalObj);
			state.modalObj.forEach(cur => {
				console.log('Before: ' + cur);
				if (cur == true) {
					getKeyByValue(state.modalObj)
				}
				console.log('After: ' + cur);
			});
			// console.log(state.modalObj);
			state.modalObj[payload.address] = payload.data
		}
	},
	actions: {
		//#region -- AUTH STUFF --
		async register({ commit, dispatch }, creds) {
			try {
				let user = await AuthService.Register(creds);

				commit('setOne', { address: 'user', data: user });

				router.push({ name: "boards" })
			} catch (e) {
				console.warn(e.message)
			}
		},
		async login({ commit, dispatch }, creds) {
			try {
				let user = await AuthService.Login(creds);
				commit('setOne', { address: 'user', data: user });
				router.push({ name: "boards" })
			} catch (e) {
				console.warn(e.message)
			}
		},
		async logout({ commit, dispatch }) {
			try {
				let success = await AuthService.Logout();
				if (!success) {
				}
				commit('resetState');
				router.push({ name: "login" })
			} catch (e) {
				console.warn(e.message)
			}
		},
		//#endregion

		getAll({ commit }, payload) {
			api
				.get('' + payload.address)
				.then(res =>
					commit('setAll', {
						address: `${payload.commitAddress}`,
						data: res.data
					})
				)
				.catch(e => console.error(e));
		},

		getOne({ commit }, payload) {
			api
				.get('' + payload.address + '/' + payload.id)
				.then(res => {
					commit(payload.commit, { address: payload.commitAddress, data: res.data })
				})
				.catch(e => console.error(e, e.message));
		},

		create({ commit }, payload) {
			api
				.post('' + payload.address, payload.data)
				.then(res => {
					commit(payload.commit, {
						address: payload.address,
						data: res.data
					})
				})
				.catch(e => console.error(e, e.message));

		},

		edit({ commit }, payload) {
			api
				.put('' + payload.address + '/' + payload.id, payload.data)
				.then(res => {
					commit(payload.commit, {
						address: payload.address, data: res.data
					});

					if (payload.commit2) {
						//#todo finish 2nd commit for add/remove task function :)
						commit()
					}
				})
				.catch(e => console.error(e));
		},

		delete({ commit }, payload) {
			api
				.delete('' + payload.address + payload.id)
				.then(res => {
					commit(payload.commit, {
						address: `${payload.address}`,
						data: payload.id
					})
				})
				.catch(e => console.error(e, e.message));
		},
	}
})


// Object-forEach Polyfill - :)
if (!Object.prototype.forEach) {
	Object.defineProperty(Object.prototype, 'forEach', {
		value: function (callback, thisArg) {
			if (this == null) {
				throw new TypeError('Not an object');
			}
			thisArg = thisArg || window;
			for (var key in this) {
				if (this.hasOwnProperty(key)) {
					callback.call(thisArg, this[key], key, this);
				}
			}
		}
	});
}
// Object-indexOf Polyfill - :)
function getKeyByValue(object, value) {
	return Object.keys(object).find(key => object[key] === value);
}