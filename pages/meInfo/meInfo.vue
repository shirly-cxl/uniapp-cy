<template>
	<view class="page page-fill">
		<view class="info-list">
			<view class="item-wapper face-line-upbottom" @click="operator">
				<view class="info-words">头像</view>
				<view class="right-wapper">
					<image class="face" :src="userInfo.avatarUrl"></image>
					<view class="arrow">
						<image class="arrow-ico" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3658949809,876707280&fm=26&gp=0.jpg"></image>
					</view>
				</view>
			</view>
			
			<view class="line-top">
				<view class="line"></view>
			</view>
			<view class="item-wapper face-line-upbottom" @click="modifnickName">
				<view class="info-words">昵称</view>
				<view class="right-wapper">
					<view>{{userInfo.nickName}}</view>
					<view class="arrow">
						<image class="arrow-ico" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3658949809,876707280&fm=26&gp=0.jpg"></image>
					</view>
				</view>
			</view>
			
			<view class="line-top">
				<view class="line"></view>
			</view>
			<view class="item-wapper face-line-upbottom" @click="birthday">
				<view class="info-words">生日</view>
				<view class="right-wapper">
					<view>{{userInfo.birthday}}</view>
					<view class="arrow">
						<image class="arrow-ico" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3658949809,876707280&fm=26&gp=0.jpg"></image>
					</view>
				</view>
			</view>
			
			<view class="line-top">
				<view class="line"></view>
			</view>
			<view class="item-wapper face-line-upbottom" @click="modifSex">
				<view class="info-words">性别</view>
				<view class="right-wapper">
					<view>
						<view v-if="userInfo.sex == 1">男</view>
						<view v-else-if="userInfo.sex == 0">女</view>
						<view v-else>未知</view>
					</view>
					<view class="arrow">
						<image class="arrow-ico" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3658949809,876707280&fm=26&gp=0.jpg"></image>
					</view>
				</view>
			</view>
		</view>
		
		<view class="footer-wapper">
			<view class="footer-words" @click="clearStorge">清理缓存</view>
			<view class="footer-words" style="margin-top: 10upx;" @click="removeLogin">退出登录</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo:{},
				sex:0,
			}
		},
		methods: {
			clearStorge(){
				uni.clearStorage();
				uni.showToast({
					title:'清理缓存成功',
					mask:false,
					duration:1500,
				});
			},
			
			removeLogin(){
				var globalUser = this.getGlobalUser("globalUser"); 
				//发请求
				
				uni.showToast({
					title:'退出登录成功',
					mask:false,
					duration:1500,
					success:(res) =>{
						uni.removeStorageSync('globalUser');
						uni.switchTab({
							url:'../my/my'
						});
					}
				});
			},
			
			operator(){
				var  globalUser= this.getGlobalUser("globalUser");
				uni.showActionSheet({
					itemList:['查看我的头像','从相册选择上传'],
					success(res) {
						var index = res.tapIndex;
						if(index == 0){
							var faceArr = [];
							faceArr.push(globalUser.avatarUrl);
							uni.previewImage({
								urls:faceArr,
								current:faceArr[0]
							})
						}else if(index == 1){
							uni.chooseImage({
							    count: 1, //默认9
							    sizeType: ['compressed'], //压缩图
							    sourceType: ['album'], //从相册选择
							    success(res) {
									var tempFilePaths=res.tempFilePaths[0];
									// #ifdef H5
									uni.navigateTo({
										url:'../myFace/myFace?tempFilePaths='+tempFilePaths
									});
									// #endif
									// #ifndef H5
									uni.navigateTo({
										url:'../faceCrop/faceCrop?tempFilePaths='+tempFilePaths
									});
									// #endif
							        console.log(JSON.stringify(res.tempFilePaths));
							    }
							});
						}
					}
				})
			},
		
			modifnickName(){
				uni.navigateTo({
					url:'../nickName/nickName'
				})
			},
			
			birthday(){
				uni.navigateTo({
					url:'../birthday/birthday'
				})
			},
			
			modifSex(){
				uni.navigateTo({
					url:'../sex/sex'
				})
			}
		},
		onShow() {
			var me =this;
			var globalUser = me.getGlobalUser("globalUser");
			if(globalUser !=null){
				me.userInfo =globalUser;
			}else{
				me.userInfo ={};
			}
		}
	}
</script>

<style>
	@import url("meInfo.css");
</style>
