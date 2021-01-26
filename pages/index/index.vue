<template>
	<view class="page">
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" class="carousel">
			<swiper-item>
				<image src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3207953197,1028358821&fm=26&gp=0.jpg" class="carousel"></image>
			</swiper-item>
			<swiper-item>
				<image src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1209868742,1697090988&fm=26&gp=0.jpg" class="carousel"></image>
			</swiper-item>
			<swiper-item>
				<image src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1058748714,3132103856&fm=26&gp=0.jpg" class="carousel"></image>
			</swiper-item>
		</swiper>
		<!-- 热门超英 -->
		<view class="hot-title">热门超英</view>
		<scroll-view scroll-x="true" class="hot">
			<view class="single" v-for="(item,index) in hotList" :key="item.id">
				<view class="wapper">
					<image :src="item.img" class="poster"></image>
					<view class="name">{{item.name}}</view>
					<view class="score"> 评分：{{item.score}}</view>
				</view>
			</view>
		</scroll-view>
		<!-- 热门预告 -->
		<view class="hot-title">热门预告</view>
		<view class="video">
			<!-- <video v-for="item in videoList" :poster="item.imgUrl" :src="item.videoUrl"  controls class="movice"></video> -->
			<video :id="item.id" :data-playIndex="item.id" @play="playing" v-for="item in videoList" :key="item.id" :src="item.videoUrl"  controls class="movice"></video>
		</view>
		<!-- 猜你喜欢 -->
		<view class="hot-title">猜你喜欢</view>
		<view class="like">
			<view class="like-movice" v-for="(item,gIndex) in hotList" :key="item.id">
				<image class="like-img" :src="item.img"></image>
				<view class="desc">
					<view class="title">{{item.name}}</view>
					<view class="info">2018 / 美国 / 科幻 动作</view>
					<view class="info">超级英雄</view>
					<view class="info">上映时间：2013-05-01(中国大陆)</view>
				</view>
				<view class="oper" :data-gIndex="gIndex" @click="praise">
					<image class="ico" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=195142957,292182703&fm=26&gp=0.jpg"></image>
					<view class="thumb">点赞</view>
					<view class="thumb animations" :animation="animationDataArr[gIndex]">+1</view>
				</view>
			</view>
		</view>
		<!-- <view class="like">
			<view class="like-movice">
				<image class="like-img" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1042131514,968669250&fm=26&gp=0.jpg"></image>
				<view class="desc">
					<view class="title">蝙蝠侠大战超人</view>
					<view class="info">2018 / 美国 / 科幻 动作</view>
					<view class="info">超级英雄</view>
					<view class="info">上映时间：2013-05-01(中国大陆)</view>
				</view>
				<view class="oper" @click="praise">
					<image class="ico" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=195142957,292182703&fm=26&gp=0.jpg"></image>
					<view class="thumb">点赞</view>
					<view class="thumb animations" :animation="animationData">+1</view>
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	// import common from "../../common/common.js";
	
	export default {
		data() {
			return {
					hotList:[
						{
							id:0,
							img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1042131514,968669250&fm=26&gp=0.jpg',
							name:'蝙蝠侠',
							score:9.1,
						},
						{
							id:1,
							img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2858705111,828609888&fm=26&gp=0.jpg',
							name:'我在时间尽头等你',
							score:8.1,
						},
						{
							id:2,
							img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2169462857,3605324267&fm=26&gp=0.jpg',
							name:'战狼2',
							score:9.2,
						},
						{
							id:3,
							img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3875542836,427911757&fm=26&gp=0.jpg',
							name:'釜山行',
							score:8.5,
						},
						{
							id:4,
							img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1271429768,3424216365&fm=26&gp=0.jpg',
							name:'悲伤逆流成河',
							score:9.0,
						}
					],
					videoList:[
						{
							id:"0",
							imgUrl:'',
							videoUrl:'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4',
						},
						{
							id:"1",
							imgUrl:'',
							videoUrl:'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4',
						},
						{
							id:"2",
							imgUrl:'',
							videoUrl:'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4',
						},
						{
							id:"3",
							imgUrl:'',
							videoUrl:'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4',
						}
					],
					animationData:{},
					animationDataArr:[
						{},{},{},{},{}
					]
				}
		},
		onLoad() {
			// var serverUrl = common.serverUrl;
			var me = this;
			//创建一个临时动画对象
			//#ifdef APP-PLUS  || MP-WEIXIN
			this.animation = uni.createAnimation();
			//#endif
			
			me.refresh();
		},
		onUnload() {
			//清除动画数据
			this.animationData = {};
			this.animationDataArr = [{},{},{},{},{}];
		},
		onPullDownRefresh() {
			//下拉刷新
			this.refresh();
		},
		onHide() {
			if(this.videoContext){
				this.videoContext.pause();
			}
		},
		methods: {
			playing(e){
				var me= this;
				var id = "";
				
				if(e){
					id = e.currentTarget.dataset.playindex;
					me.videoContext = uni.createVideoContext(id);
				}
				var videoList = me.videoList;
				for(var i=0; i < videoList.length;i++){
					var tempId =videoList[i].id;
					if( tempId != id){
						uni.createVideoContext(tempId).pause();
					}
				}
			},
			
			refresh(){
				//方式1
				uni.showLoading({
					mask:true
				}),
				//方式2
				// uni.showNavigationBarLoading();
				uni.request({
					//参数 .../list?参数=&
					url:'',
					method:"",
					success: (res) => {
						if(res.data.status == 200){}
					},
					complete: () => {
						//方式1
						uni.hideLoading();
						//方式2,需要将titleNView设置为true
						// uni.hideNavigationBarLoading();
						uni.stopPullDownRefresh();
					}
				})
			},
			//实现点赞动画效果
			praise(e){
				//#ifdef APP-PLUS  || MP-WEIXIN
				var gIndex = e.currentTarget.dataset.gindex;
				console.log(gIndex);
				
				//构建动画数据，并且通过step来表示这组动画的完成
				this.animation.translateY(-90).opacity(1).step({
					duration:400
				});
				//导出
				// this.animationData = this.animation.export();
				this.animationData = this.animation;
				this.animationDataArr[gIndex] = this.animationData.export();
				//还原
				setTimeout(function(){
					this.animation.translateY(0).opacity(0).step({
					duration:0
				});
					// this.animationData = this.animation.export();
					this.animationData = this.animation;
					this.animationDataArr[gIndex] = this.animationData.export();
				}.bind(this),500);
				//#endif
			}
		}
	}
</script>
	
<style>
	@import url("index.css");
</style>
