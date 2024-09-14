import test from 'ava'

import { clean, cleanText, isHtml } from '../index.js'

test('test clean from docs.rs example', (t) => {
  t.is(clean("XSS<script>attack</script>"), "XSS")
})

test('test clean_text from docs.rs example', (t) => {
  t.is(cleanText("XSS<script>attack</script>"), "XSS&lt;script&gt;attack&lt;&#47;script&gt;")
})

test('test is_html', (t) => {
  t.is(isHtml("<h1"), false)
  t.is(isHtml("<h1>Hello World!</h1>"), true)
})
