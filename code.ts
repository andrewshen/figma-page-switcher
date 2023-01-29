figma.parameters.on("input", ({ query, result }: ParameterInputEvent) => {
  result.setSuggestions(
    figma.root.children
      .filter(({ name }) => name.toLowerCase().includes(query.toLowerCase()))
      .map(({ name, id }) => {
        return {
          name: name,
          data: id,
        };
      })
  );
});

figma.on("run", ({ parameters }: RunEvent) => {
  const selectedPageId = parameters?.["page"];
  figma.currentPage = figma.root.children.filter(
    ({ id }) => id === selectedPageId
  )[0];
  figma.closePlugin();
});
