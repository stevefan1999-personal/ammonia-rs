#![deny(clippy::all)]

#[macro_use]
extern crate napi_derive;

#[napi]
pub fn clean(src: String) -> String {
  ammonia::clean(&src)
}

#[napi]
pub fn clean_text(src: String) -> String {
  ammonia::clean_text(&src)
}

#[napi]
pub fn is_html(input: String) -> bool {
  ammonia::is_html(&input)
}

