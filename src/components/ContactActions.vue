<template>
  <td class="actions">
    <span class="material-icons green" @click="isComplete">done</span>
    <span class="material-icons yellow" @click="isFollowUp">redo</span>
    <span class="material-icons red" @click="isRemove">clear</span>
  </td>
</template>

<script>
import useDocument from '../composables/useDocument'

export default {
  props: ['doc'],
  setup(props) {
    const { updateDoc } = useDocument('contacts', props.doc.id)

    const isComplete = async () => {
      await updateDoc({
        completed: !props.doc.completed,
        followUp: false,
        remove: false
      })
    }

    const isFollowUp = async () => {
      await updateDoc({
        followUp: !props.doc.followUp,
        completed: false,
        remove: false,
      })
    }

    const isRemove = async () => {
      await updateDoc({
        remove: !props.doc.remove,
        completed: false,
        followUp: false
      })
    }

    return { isComplete, isFollowUp, isRemove }
  }
}
</script>

<style>
  .red:hover {
    color: crimson;
  }
  .green:hover {
    color: #628a13;
  }
  .yellow:hover {
    color: gold;
  }
  .actions {
    display: flex;
    justify-content: space-evenly;
  }
  .actions span {
    cursor: pointer;
    transition: all .1s;
  }
  .actions span:hover {
    transform: translateY(-2px) scale(1.3);
  }
</style>