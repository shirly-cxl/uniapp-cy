<template>
	<view class="page page-fill">
		<form @submit="submitBirthday">
			<view class="block" style="margin-top:20upx;">
				<picker mode="date" @change="dateChange">
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
			me.birthday = globalUser.birthday;
		},
		methods: {
			submitBirthday(e) {
				var me = this;
				var birthday = me.birthday;
				var globalUser = me.globalUser;
				me.globalUser.birthday = birthday;
				var userInfo = globalUser;
				console.log(birthday);
				uni.setStorageSync("globalUser", userInfo);
				uni.navigateBack({
					delta:1
				});
				
				// uni.request({
				// 	url:''
				// })
			},
			
			dateChange(e){
				this.birthday = e.detail.value;
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
		padding: 20upx;
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
	
	.btn{
		width:95%;
		margin-top: 30upx;
	}
</style>
