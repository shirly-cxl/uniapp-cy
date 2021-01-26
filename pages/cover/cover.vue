<template>
	<view class="black">
		<image :src="img" mode="widthFix" class="img" @longpress="operator"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img:''
			}
		},
		onLoad(params) {
			var me =this;
			var listImg = params.listImg+"&fm="+params.fm+"&gp="+params.gp;
			me.img = listImg;
			
			uni.setNavigationBarColor({
				frontColor:"#ffffff",
				backgroundColor:"#000"
			});
			
		},
		methods: {
			operator(){
				uni.showActionSheet({
					itemList:["保存图片到本地","另存为"],
					success: function(res) {
						if(res.tapIndex == 0){
							console.log("图片保存中...");
							uni.showLoading({
								title:'图片保存中...'
							});
							uni.downloadFile({
								url:this.img,
								success: function(result){
									var tempFilePath =result.tempFilePath;
									console.log(tempFilePath);
									uni.saveImageToPhotosAlbum({
										filePath: tempFilePath,
										success:function(){
											uni.showToast({
												title:"保存成功",
												duration:2000
											});
										},
										complete:function(){
											uni.hideLoading();
										}
									});
								}
							});
							
						}else{
							console.log("另存为...");
						}
					}
				})
			}
		}
	}
</script>

<style>
	.black{
		background-color: #000000;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: fixed;
	}
	
	.img{
		align-self: center;
	}
</style>
