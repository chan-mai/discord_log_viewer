<script setup lang="ts">
    // propsをうけとり
    const props = defineProps({
        id: {
            required: true,
            type: String
        }
    });

    console.log(`id: ${props.id}`);

    // idに文字列が含まれていないか確認
    if (props.id.match(/[^0-9]/)) {
        throw new Error('不正なidです。');
    }
    // [id].jsonを読み込み
    try {
        const path = `../assets/logs/${props.id}.json`;
        import(path).then((log) => {
            console.log(log);
        });
    }catch(e: any) {
        // [id].jsonが存在しない場合
        if (e.code === 'MODULE_NOT_FOUND') {
            throw new Error('指定されたidのログは存在しません。');
        }else{
            throw e;
        }
    }
</script>

<template>
  <main>
    <h1>hogehoge</h1>
  </main>
</template>
