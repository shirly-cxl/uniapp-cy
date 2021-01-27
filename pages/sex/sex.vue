<template>
	<view class="page page-fill">
		<form @submit="submitSex">
			<view class="block" style="margin-top:20upx ;">
				<radio-group class="radio-sex" @change="sexChange">
					<label class="radio-single">
						<radio value="1" :checked='sex==1'>男</radio>
					</label>
					<label class="radio-single">
						<radio value="0"  :checked='sex==0'>女</radio>
					</label>
				</radio-group>
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
				sex:'-1',
			}
		},
		onLoad() {
			var me = this;
			var globalUser = me.getGlobalUser("globalUser");
			me.globalUser = globalUser;
			me.sex = globalUser.sex;
		},
		methods: {
			submitSex(e) {
				var me = this;
				var sex = me.sex;
				var globalUser = me.globalUser;
				me.globalUser.sex = sex;
				var userInfo = globalUser;
				console.log(sex);
				uni.setStorageSync("globalUser", userInfo);
				uni.navigateBack({
					delta:1
				});
				
				// uni.request({
				// 	url:''
				// })
			},
			
			sexChange(e){
				this.sex = e.detail.value;
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

	.radio-sex{
		display: flex;
		flex-direction: column;
	}
	
	.radio-single{
		padding: 20upx 20upx;
	}

	.btn {
		width: 95%;
		margin-top: 40upx;
	}
</style>
