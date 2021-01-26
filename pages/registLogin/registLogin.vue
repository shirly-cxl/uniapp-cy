<template>
	<view class="body">
		<form @submit="formSubmit">
			<view class="face-wapper">
				<image class="face" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3421846904,3126041548&fm=26&gp=0.jpg"
				 mode="aspectFit"></image>
			</view>
			<view class="info-wapper">
				<label class="words">账号</label>
				<input name="username" type="text" value="" class="input" placeholder="请输入用户名" placeholder-class="graywords" />
			</view>
			<view class="info-wapper" style="margin-top: 40upx;">
				<label class="words">密码</label>
				<input name="password" type="text" value="" class="input" placeholder="请输入密码" password="true" placeholder-class="graywords" />
			</view>
			<button form-type="submit" type="primary" style="margin-top: 60upx; width: 90%;">注册/登录</button>

		</form>

		<!-- #ifndef H5 -->
		<view>
			<view class="third">
				<view class="line-w"></view>
				<view>第三方账号登录</view>
				<view class="line-w"></view>
			</view>
			<!-- #ifdef APP-PLUS -->
			<view class="third-wapper">
				<image class="third-img" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1118145297,860305148&fm=26&gp=0.jpg"
				 mode="aspectFit" data-logintype="weixin" @click="appOauthLogin"></image>
				<image class="third-img" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1182493654,3674626827&fm=26&gp=0.jpg"
				 mode="aspectFit" data-logintype="qq" @click="appOauthLogin"></image>
				<image class="third-img" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676359849,4289230400&fm=26&gp=0.jpg"
				 mode="aspectFit" data-logintype="sinaweibo" @click="appOauthLogin"></image>
			</view>
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
			<button open-type="getUserInfo" @getuserinfo="wxLogin" class="third-btn"></button>
			<!-- #endif -->
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo:{
					nickName:'null',
					birthday:'2020-10-10',
					avatarUrl:'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1475331839,2066156315&fm=26&gp=0.jpg',
				}
			}
		},
		methods: {
			formSubmit(e) {
				var me = this;
				var username = e.detail.value.username;
				var password = e.detail.value.password;
				uni.switchTab({
					url: '../my/my'
				});
				this.userInfo.nickName = username;
				var userInfo = this.userInfo;
				uni.setStorageSync("globalUser", userInfo);
				// uni.request({
				// 	url:'',
				// 	method:'',
				// 	data:{
				// 		"username":username,
				// 		"password":password,
				// 	},
				// 	success: (res) => {

				// 		if(res.data.status == 200){
				// 			var userInfo=res.data.data;
				// 			uni.setStorageSync("globalUser",userInfo);
				// 			uni.switchTab({
				// 				url:'../me/me'
				// 			})
				// 		}else if(res.data.status == 500){
				// 			uni.showToast({
				// 				title:res.data.msg,
				// 				mask:false,
				// 				duration:1500,
				// 				image:'可以放自己的图片'
				// 			});
				// 		}
				// 	}
				// })
			},
			
			wxLogin(e){
				var me =this;
				var userInfo = e.detail.userInfo;
				uni.setStorageSync("globalUser", userInfo);
				uni.switchTab({
					url: '../my/my'
				});
				//实现微信登录
				// uni.login({
				// 	provider:"weixin",
				// 	success(res){
				// 		var code = res.code;
				// 		//发起请求
				// 		// uni.request({url:''})
				// 		console.log(code);
				// 	}
				// });
				console.log(e);
			},
			
			// #ifdef APP-PLUS 
			appOauthLogin(e){
				var logintype = e.currentTarget.dataset.logintype;
				
				uni.login({
					provider:logintype,
					success(loginRes) {
						//授权登录完成以后，获取用户信息
						uni.getUserInfo({
							provider:logintype,
							success(info) {
								var userInfo = info.userInfo;
								var nickName ='',
								if(logintype == 'weixin'){
									nickName = userInfo.nickName;
								}else if(logintype == 'qq'){
									nickName = userInfo.nickname;
								}else if(logintype == 'sinaweibo'){
									nickName = userInfo.nickname;
								}
								
								uni.request({
									url:'',
									method:'POST',
									data:{
										'nickName':nickName
									}
									success(result) {
										if(result.data.status == 200){
											var userInfo = result.data.data;
											uni.setStorageSync("globalUser", userInfo);
											uni.switchTab({
												url: '../my/my'
											});	
										}
									}
								})
								console.log(JSON.stringify(info));
							}
						})
						console.log(loginRes);
					}
				})
				console.log(e);
			}
			//#endif
		}
	}
</script>

<style>
	@import url("registLogin.css");
</style>
