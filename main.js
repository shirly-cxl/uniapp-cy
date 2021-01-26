import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

//全局变量
// Vue.prototype.serverUrl = "";

//挂载方法
Vue.prototype.getGlobalUser =function(key){
	var username = uni.getStorageSync("globalUser");
	if(username !=null && username != '' && username != undefined){
		return username;
	}else{
		return null;
	}
}

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
