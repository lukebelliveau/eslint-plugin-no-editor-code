module.exports = {
  rules: {
    'no-region': {
      create: function(context) {
        return {
          Program(node) {
            node.comments.forEach(c => {
              if(
                c.type !== "Line" ||
                !(
                  c.value.includes("#region") ||
                  c.value.includes("#endregion")
                )
              ) {
                return;
              }
              context.report(
                c,
                "Do not use vscode fold regions"
              )
            })
          }
        }
      }
    }
  }
}
