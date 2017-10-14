module.exports = {
  rules: {
    'no-region': {
      meta: {
        fixable: "code",
      },
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
              context.report({
                node: c,
                message: "Do not use vscode fold regions",
                fix: function(fixer) {
                  return fixer.remove(c);
                }
              })
            })
          }
        }
      }
    }
  }
}
