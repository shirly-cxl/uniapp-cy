<template>
	<view class="page page-fill">
		<view class="wapper">
			<image id="face" class="faces" :src="temFace" mode="scaleToFill"></image>
		</view>
		
		<view class="notice">
			<view class="notice-words">* 请从相册中选择等比宽高的图片噢~</view>
		</view>
		
		<view class="footer">
			<view class="words" @click="">重新选择</view>
			<view class="words" @click="">确认上传</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				temFace:'',
			}
		},
		onLoad(params) {
			var tempFilePaths=params.tempFilePaths;
			this.temFace = tempFilePaths;
		},
		methods: {
			
		}
	}
</script>

<style>
	.page-fill{
		width: 100%;
		height: 100%;
		position: absolute;
		background: black;
	}
	
	.wapper{
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-top: 40upx;
	}
	
	.faces{
		width: 600upx;
		height: 600upx;
	}
	
	.notice{
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	}
	
	.notice-words{
		color: gray;
		font-size: 13px;
		margin-top: 30upx;
		width: 600upx;
	}
	
	.footer{
		position: fixed;
		bottom: 0;
		border-top: #515050 solid 1px;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 30upx;
	}
	
	.words{
		color: #e8e5e5;
		font-size: 16px;
		width: 200upx;
	}
</style>
