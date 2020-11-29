export const setUserMap = (state, action) => {
    let data
    switch (action.type) {
        case 'setUserMap':
            data = Object.assign(state, action.data)
            return data
        default:
            return {
                name: 'frank',
                avatar: 'https://frank-1302698468.cos.ap-beijing.myqcloud.com/reactBlog/images/1jhykJUftOc.jpg',
                classicQuotations: '不和愚蠢的人争执'
            }
    }
}