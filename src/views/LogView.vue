<script setup lang="ts">
import { ref, defineProps } from 'vue';
// import postContent from './components/postContent.vue';
import Skeleton from 'primevue/skeleton';

// propsを受け取り
const props = defineProps({
    id: {
        required: true,
        type: String
    }
});

let channelData: any = ref([]);

console.log(`log_id: ${props.id}`);

// idに文字列が含まれていないか確認
if (props.id.match(/[^0-9]/)) {
    console.error("不正なIDフォーマットです。");
}

// [id].jsonを読み込み
try {
    //channelData.value = await fetch(`/src/assets/logs/${props.id}.json`).then((res) => res.json());
    console.log(channelData);
} catch (error) {
    // ファイルが存在しない場合
    if (error instanceof TypeError) {
        console.error("ファイルが存在しません。");
    } else {
        console.error(error);
    }
}
</script>

<template>
    <main>
                <div class="card">
                    <div class="border-round border-1 surface-border surface-card">
                        <div class="flex mb-3">
                            <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                            <div class="">
                                <Skeleton width="5rem" class="mb-2"></Skeleton>
                                <Skeleton class="mb-2"></Skeleton>
                                <Skeleton height=".5rem"></Skeleton>
                            </div>
                        </div>
                        <Skeleton width="100%" height="150px"></Skeleton>
                    </div>
                </div>
        <Suspense timeout="100">
            <div v-for="post in channelData" :key="post.created_at">
                <postContent :key="post.id" :channelId="post.channel_id" :authorId="post.author_id" :author="post.author" :content="post.content" :createdAt="post.created_at" />
            </div>
            
            <template #fallback>
            </template>
        </Suspense>
    </main>
</template>