<script setup lang="ts">
  import { ref } from 'vue';
  import { RouterView } from 'vue-router';
  
  import _categories from './assets/logs/_categories.json'
  import _channels from './assets/logs/_channels.json'

  import Tree from 'primevue/tree';
  import Splitter from 'primevue/splitter';
  import SplitterPanel from 'primevue/splitterpanel';

  // menuItemsの作成
  var menuItems: any = ref([]);

  // カテゴリーとチャンネルのツリー構造を作成
    var parentIdx: number = 0;
  _categories.forEach((category) => {
    // console.log(category)
    var inCategoryChannelItems: { key: string; label: string; to: string; }[] = [];
      var childIdx: number = 0;
    _channels.forEach((channel) => {
      if (category.category_id === channel.category_id) {
        // console.log(channel)
        inCategoryChannelItems.push({key: `${parentIdx}-${childIdx}`, label: channel.name, to: `/channels/${channel.channel_id}`})
        childIdx++;
      }
    });
    menuItems.value.push({key: `${parentIdx}`, label: category.name, children: inCategoryChannelItems});
    parentIdx++;
  });

  console.log(menuItems.value)
</script>

<template>
  <div class="card">
    <Splitter style="width: 95vw;">
      <SplitterPanel class="flex align-items-center justify-content-center" :size="25" :minSize="10">
        <div class="card flex justify-content-center">
          <ScrollPanel style="width: 100%; max-height: 100%">
            <Tree :value="menuItems" :filter="true" filterMode="strict" multiple/>
          </ScrollPanel>
        </div>
      </SplitterPanel>
      <SplitterPanel class="flex align-items-center justify-content-center" :size="75">
        <div class="card flex justify-content-center">
          <ScrollPanel style="width: 100%; max-height: 100%">
            <div style="padding: 50px;">
              <RouterView />
            </div>
          </ScrollPanel>
        </div>
      </SplitterPanel>
    </Splitter>
</div>
</template>