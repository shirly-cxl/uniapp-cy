<template>
	<view class="page page-fill">
		<view class="wapper">
			<image id="face" class="faces" :src="temFace" mode="scaleToFill"></image>
		</view>

		<view class="notice">
			<view class="notice-words">* 请从相册中选择等比宽高的图片噢~</view>
		</view>

		<view class="footer">
			<view class="words" @click="changeFace">重新选择</view>
			<view class="words" @click="upload">确认上传</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				temFace: '',
			}
		},
		onLoad(params) {
			var tempFilePaths = params.tempFilePaths;
			this.temFace = tempFilePaths;
		},
		methods: {
			changeFace() {
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['compressed'], //压缩图
					sourceType: ['album'], //从相册选择
					success(res) {
						var tempFilePaths = res.tempFilePaths[0];
						this.temFace = tempFilePaths;
						console.log(JSON.stringify(res.tempFilePaths));
					}
				});
			},

			upload() {
				var me = this;
				var globalUser = me.getGlobalUser("globalUser");
				globalUser.avatarUrl = me.temFace;
				var userInfo = globalUser;
				uni.setStorageSync("globalUser",userInfo);
				uni.navigateBack({
					delta:1
				});
				/**
				var globalUser = me.getGlobalUser("globalUser"); 
				uni.showLoading({
					title:"上传中，请稍后",
					mask: true
				});
				
				uni.uploadFile({
					url: 'https://www.example.com/upload', //仅为示例，非真实的接口地址
					filePath: me.temFace,
					header:{
						"token":''
					},
					name: 'file',
					success(uploadFileRes){
						var resData = JSON.parse(uploadFileRes.data);
						if(resData.status == 200){
							var userInfo = resData.data;
							uni.setStorageSync("globalUser",userInfo);
							uni.navigateBack({
								delta:1
							});
						}else if(resData.status == 502 || resData.status == 500){
							uni.showToast({
								title:uploadFileRes.data.msg,
								duration:2000,
							});
						}
						console.log(uploadFileRes.data);
					},
					complete() {
						uni.hideLoading();
					}
				});
				**/
			}
		}
	}
</script>

<style>
	.page-fill {
		width: 100%;
		height: 100%;
		position: absolute;
		background: black;
	}

	.wapper {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-top: 40upx;
	}

	.faces {
		width: 600upx;
		height: 600upx;
	}

	.notice {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	}

	.notice-words {
		color: gray;
		font-size: 13px;
		margin-top: 30upx;
		width: 600upx;
	}

	.footer {
		position: fixed;
		bottom: 0;
		border-top: #515050 solid 1px;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 30upx;
	}

	.words {
		color: #e8e5e5;
		font-size: 16px;
		width: 200upx;
	}
</style>
