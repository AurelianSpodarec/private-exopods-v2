import { configPages } from "./configPages";

export const configMenu = {
    navigation: [
        {
            id: "dashboard",
            name: "Dashboard",
            url: configPages.DASHBOARD.path,
            icon: <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></svg>
        },
        {
            id: "sites",
            name: "Sites",
            url: configPages.SITES.path,
            icon: <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 16"><path d="M2 4v10h16V4H2Zm1-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM2 0h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2Z"></path></svg>
        },
    ],
    secondary: [
        {
            id: "account",
            name: "Account",
            url: configPages.MY_ACCOUNT.path,
            icon: <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></svg>
        },
    ]
}
