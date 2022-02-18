// changes state to display "recent" feed
export const recent = () => {
  return {
    type: 'RECENT'
  }
}
// changes state to display "popular" feed
export const popular = () => {
  return {
    type: 'POPULAR'
  }
}
// changes state to display "your_recent" feed
export const your_recent = () => {
  return {
    type: 'YOUR_RECENT'
  }
}
// stores data for selected feed
export const current_feed_data = (data) => {
  return {
    type: data
  }
}