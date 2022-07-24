class User {
  constructor(uid, name, collection_count, wishlist_count, friend_count) {
    this.uid = uid;
    this.name = name;
    this.collection_count = collection_count;
    this.wishlist_count = wishlist_count;
    this.friend_count = friend_count;
  }
}

export default User;