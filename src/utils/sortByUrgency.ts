const firstSort = (args) => {
  args.map((args) => {
    if (args.urgency == "urgent" || "high") {
      return -1;
    }
    if (args.urgency == "medium") {
      return 0;
    }
    if (args.urgency == "low") {
      return 1;
    }
  });
};
