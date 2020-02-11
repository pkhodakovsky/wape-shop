<template>
  <div class="sort">
    <span class="label">Сортировка:</span>
    <span class="sort-item"
          v-for="item in sortItems"
          :key="item.field"
          :class="{ reverse: item.reverse }"
          @click="$emit('sortBy', item)">
          <span class="label">{{ item.name }}</span>
          <svg class="icon" height="12" viewBox="0 0 51 58" width="12"
               xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <g fill-rule="nonzero" transform="translate(0 -1)">
                <!-- eslint-disable max-len -->
                <path class="up"
                      d="m25.9969 20h6v33c0 .5522847.4477153 1 1 1h10c.5522847 0 1-.4477153 1-1v-33h6c.3708398.002689.7118642-.2028062.8827573-.5319337s.1427857-.7262873-.0727573-1.0280663l-11.97-17.03c-.1884296-.25921249-.4895366-.41258597-.81-.41258597s-.6215704.15337348-.81.41258597l-3.12 4.42-6.93 9.81-1.98 2.8c-.215543.301779-.2436504.6989388-.0727573 1.0280663s.5119175.5346227.8827573.5319337z"/>
                <!-- eslint-disable max-len -->
                <path class="down"
                      d="m2.1731 44.3575 6.93 9.81 3.12 4.42c.1884555.2591733.4895531.4125159.81.4125159s.6215445-.1533426.81-.4125159l11.97-17.03c.215543-.301779.2436504-.6989388.0727573-1.0280663s-.5119175-.5346227-.8827573-.5319337h-6v-32.9975c0-.55228475-.4477153-1-1-1h-10c-.55228475 0-1 .44771525-1 1v32.9975h-6c-.37083976-.002689-.71186417.2028062-.88275728.5319337-.17089312.3291275-.14278572.7262873.07275728 1.0280663z"/>
              </g>
            </g>
        </svg>
        </span>
  </div>
</template>

<script>
export default {
  name: 'Sort',
  data() {
    return {
      sortItems: [
        {
          field: 'name',
          name: 'Название',
          reverse: true,
        },
        {
          field: 'cost',
          name: 'Цена',
          reverse: true,
        },
      ],
    };
  },
};
</script>

<style scoped>
  .sort {
    display: flex;
    justify-content: flex-end;
    padding: .5em 1em;
    margin-bottom: .5em;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, .7);
  }
  .sort .label,
  .sort .sort-item {
    margin-right: 0.5em;
  }
  .sort .down {
    fill: #000;
  }
  .sort .up {
    fill: #fff;
  }
  .sort .reverse .down {
    fill: #fff;
  }
  .sort .reverse .up {
    fill: #000;
  }
</style>
