export type SidebarButtonDataType = {
    icon:string
    text:string
    route:string
}

export const sidebar_buttons_data:SidebarButtonDataType[] = [
    {icon: '/sidebar/mealplans_icon.svg', text: 'Meal Plans', route: '/mealplans'},
    {icon: '/sidebar/tracking_icon.svg', text: 'Tracking', route: '/tracking'},
    {icon: '/sidebar/messages_icon.svg', text: 'Messages', route: '/messages'},
    {icon: '/sidebar/notification_icon.svg', text: 'Notification', route: '/notification'},
    {icon: '/sidebar/settings_icon.svg', text: 'Settings', route: '/settings'},
]