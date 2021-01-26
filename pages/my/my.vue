<template>
	<view class="page-fill page">
		<view class="header">
			<view v-if="isLogin">
				<image class="face" :src="userInfo.avatarUrl" mode="aspectFit"></image>
			</view>
			<view v-else>
				<image class="face" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3421846904,3126041548&fm=26&gp=0.jpg" mode="aspectFit"></image>
			</view>
			<view class="info" v-if="isLogin">
				<view class="nickName">{{userInfo.nickName}}</view>
				<view class="nav-info">ID:111222333</view>
			</view>
			<view class="info" v-else>
				<view class="login" @click="login">登录/注册</view>
			</view>
			<navigator v-if="isLogin" url="../meInfo/meInfo">
				<image src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3344626597,2647702379&fm=26&gp=0.jpg" class="setting" mode="aspectFit"></image>		
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLogin:false,
				userInfo:{},
			}
		},
		methods: {
			login(){
				uni.navigateTo({
					url:'../registLogin/registLogin'
				})
			}
		},
		onShow(){
			var me = this;
			// var username = uni.getStorageSync("globalUser");
			// if(username !=null && username != '' && username != undefined){
			// 	me.isLogin =true;
			// 	me.username =username;
			// }else{
			// 	me.isLogin =false;
			// 	me.username ='';
			// }
			
			var userInfo = me.getGlobalUser("globalUser");
			if(userInfo !=null){
				me.isLogin =true;
				me.userInfo =userInfo;
			}else{
				me.isLogin =false;
				me.userInfo ={};
			}
		},
		onLoad() {
		// 	var me = this;
		
		// 	var serverUrl = me.serverUrl;
			
		// 	uni.request({
		// 		url: serverUrl + '',
		// 	})
		}
	}
</script>

<style>
	@import url("my.css");
</style>
