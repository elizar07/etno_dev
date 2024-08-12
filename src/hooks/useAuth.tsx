import axios from 'axios'
import React from 'react'

export const useAuth = (
	{ url } = {
		url: 'http://3.38.98.134/auth/signup'
	}
) => {
	const login = async (userName: string, password: string) => {
		let res
		try {
			res = await axios.post(url, {
				userName,
				password
			})
			return res.data
		} catch (error: any) {
			console.log(error)
			return {
				success: false,
				message: error?.message || 'Something went wrong'
			}
		}
	}

	return {
		login
	}
}
