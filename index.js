module.exports.rules = function(context) {
  return {
    Program(node) {
      mments.forEach(c => {
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
