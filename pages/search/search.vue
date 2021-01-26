<template>
	<view class="page">
		<view class="search">
			<view class="ico">
				<image class="search-ico" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3772246880,2259448209&fm=15&gp=0.jpg"></image>
			</view>
			<input placeholder="搜索预告" maxlength="10" class="text"
			 confirm-type="search" @confirm="searchMoice" />
			<!-- <input placeholder="搜索预告" maxlength="10" class="text" 
			focus confirm-type="search" @confirm="searchMoice" /> -->
		</view>
		<view class="movice-list">
			<view class="movice-wapper" v-for="list in moviceList" :key="list.id">
				<image class="img" :src="list.img" :data-listId="list.id" @click="showList"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				moviceList:[
					{
						id:0,
						img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2652968614,70305101&fm=26&gp=0.jpg',
						name:'大秦帝国之天下'
					},
					{
						id:1,
						img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=678599091,1861395461&fm=11&gp=0.jpg',
						name:'爱的厘米'
					},
					{
						id:2,
						img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3226665049,1679128929&fm=26&gp=0.jpg',
						name:'狼殿下'
					},
					{
						id:3,
						img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=350627571,2732102845&fm=15&gp=0.jpg',
						name:'从结婚开始恋爱'
					},
					{
						id:4,
						img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=348526693,3874330740&fm=26&gp=0.jpg',
						name:'我的天才女友 '
					},
					{
						id:5,
						img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3355952101,1620298465&fm=26&gp=0.jpg',
						name:'箭在弦上'
					},
					{
						id:6,
						img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=571022763,4104316640&fm=26&gp=0.jpg',
						name:'轩辕剑之汉之云'
					}
				],
				trailerList:[],
				keywords:"", //搜索关键字
				page:1,      //当前第几页
				totalPages:1 //总页数
			}
		},
		onLoad() {
			var me = this;
			uni.showLoading({
				mask:true,
				title:"loading..."
			});
			uni.request({
				// url:'https//...?keywords=&page=&pageSize',
				url:'',
				method:"",
				success: (res) => {
					if(res.data.status == 200){
						// var trailerList =res.data.data;
						// me.trailerList = trailerList;
					}
				},
				complete: () => {
					uni.hideLoading();
				}
			});
		},
		onReachBottom() {
			var me = this;
			var page = me.page + 1;
			var keywords = me.keywords;
			var totalPages = me.totalPages;
			
			if( page > totalPages){
				return;
			}
			me.pagesList(keywords,page,15);
		},
		methods: {
			showList(e){
				var listId = e.currentTarget.dataset.listid;
				var listName = this.moviceList[listId]['name'];
				var listImg = this.moviceList[listId]['img'];
				uni.navigateTo({
					url:"../movice/movice?listId="+listId+"&listName="+listName+"&listImg="+listImg
				})
			},
			
			
			searchMoice(e){
				var me = this;
				//获取搜索的内容
				var value = e.detail.value;
				me.moviceList[e]['name']=value;
				// me.keywords = value;
				// me.trailerList=[];
				// me.pagesList( value, 1, 15);
			},
			//分页
			pagesList(keywords,page,pageSize){
				var me = this;
				uni.showLoading({
					mask:true,
					title:"loading..."
				});
				uni.request({
					// url:'https//...?keywords='+keywords+'&page='+page+'&pageSize'+pageSize,
					url:'',
					method:"",
					success: (res) => {
						if(res.data.status == 200){
							var tempList =res.data.data;
							//拼接
							me.trailerList = me.trailerList.concat(tempList);
							me.totalPages = res.data.data.total; //获取总页数
							me.page = page;
						}
					},
					complete: () => {
						uni.hideLoading();
					}
				});
			}
			
		}
	}
</script>

<style>
	@import url("search.css");
</style>

<!-- https://www.bilibili.com/video/BV1cK411M7De?p=105 -->