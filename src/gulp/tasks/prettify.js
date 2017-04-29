module.exports = (gulp, PATH, $) => {
  return () => {
    gulp.src( `${ PATH.static_html }/**/*.html` )
      .pipe($.prettify(
        {
          "brace_style": "collapse",
          "indent_char": " ",
          "indent_inner_html": true,
          "indent_scripts": "keep",
          "indent_size": 2,
          "max_preserve_newlines": 0,
          "preserve_newlines": true,
          "wrap_line_length": 0,
          "unformatted": [
            "a",
            "abbr",
            "acronym",
            "address",
            "b",
            "br",
            "bdo",
            "big",
            "cite",
            "code",
            "del",
            "dfn",
            "em",
            "font",
            "i",
            "ins",
            "kbd",
            "pre",
            "q",
            "s",
            "samp",
            "small",
            "span",
            "strike",
            "strong",
            "sub",
            "sup",
            "tt",
            "u",
            "var"
          ]
        }))
      .pipe(gulp.dest(`${ PATH.static_html }/`))
  }
}