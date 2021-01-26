<template>
	<view class="page page-fill">
		<form @submit="submitBirthday">
			<view class="block" style="margin-top:20upx ;">
				<picker mode="date">
					<view class="birthday">{{birthday}}</view>
				</picker>
			</view>
			<button type="primary" form-type="submit" class="btn">提交</button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				globalUser: {},
				birthday:''
			}
		},
		onLoad() {
			var me = this;
			var globalUser = me.getGlobalUser("globalUser");
			me.globalUser = globalUser;
		},
		methods: {
			submitName(e) {
				var me = this;
				var nickName = e.detail.value.nickname;
				var globalUser = me.globalUser;
				me.globalUser.nickName = nickName;
				var userInfo = globalUser;
				console.log(nickName);
				uni.setStorageSync("globalUser", userInfo);
				uni.navigateBack({
					delta:1
				});
				
				// uni.request({
				// 	url:''
				// })
			}
		}
	}
</script>

<style>
	.page-fill {
		width: 100%;
		height: 100%;
		position: absolute;
	}

	.block {
		background-color: #fff;
	}
	
	.birth-input {
		height: 80upx;
		line-height: 40upx;
		background-color: #fff;
		padding-left: 20upx;
	}

	.birth{
		height: 80upx;
		background-color: #fff;
		padding-left: 20upx;
		padding-top: 30upx;
	}
</style>
