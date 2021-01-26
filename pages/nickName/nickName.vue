<template>
	<view class="page page-fill">
		<form @submit="submitName">
			<view class="block" style="margin-top:20upx ;">
				<input type="text" name="nickname" class="input" :value="globalUser.nickName" placeholder="请输入昵称" placeholder-class="graywords"
				 maxlength="10" />
			</view>
			<button type="primary" form-type="submit" class="btn">提交</button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				globalUser: {}
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

	.graywords {
		color: #EAEAEA;
	}

	.input {
		height: 80upx;
		line-height: 80upx;
		width: 500upx;
		margin-left: 40upx;
	}

	.btn {
		width: 95%;
		margin-top: 40upx;
	}
</style>
