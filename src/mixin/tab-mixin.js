export default {
  props: {
    key: {
      type: String,
      required: true,
    },
  },
  data: () => {
    return {
      isActive: true,
    };
  },
};
