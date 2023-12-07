<script setup>
    // propsを受け取り
    const props = defineProps({
        channelId: {
            required: true,
            type: number
        },
        authorId: {
            required: true,
            type: number
        },
        author: {
            required: true,
            type: String
        },
        content: {
            type: String
        },
        createdAt: {
            required: true,
            type: String
        },
    });

    console.log(props);
</script>

<template>
    <div>
        <div class="card">
            <div class="border-round border-1 surface-border surface-card">
                <div class="flex mb-3">
                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                    <div class="">
                        <!--<Skeleton width="5rem" class="mb-2"></Skeleton>-->
                        <p class="mb-2">{{ props.author }}</p>
                        <!--<Skeleton class="mb-2"></Skeleton>-->
                        <p class="mb-2">{{ props.author_id }}</p>
                        <!--<Skeleton height=".5rem"></Skeleton>-->
                        <p class="mb-2">{{ props.createdAt }}</p>
                    </div>
                </div>
                <Skeleton width="100%" height="150px"></Skeleton>
                <div class="w-full">
                    <p v-if="props.content !== null" class="text-left">{{ props.content }}</p>
                    <p v-else class="text-left">表示できません</p>
                </div>
            </div>
        </div>
    </div>
</template>