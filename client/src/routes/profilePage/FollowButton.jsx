import { useMutation, useQueryClient } from "@tanstack/react-query"
import apiRequest from "../../utils/apiRequest";

const followUser = async (username) => {
    const res = await apiRequest.post(`/users/follow/${username}`)
    return res.data;
}

const FollowButton = ({ isFollowing, username }) => {
    const queryClient = useQueryClient();
    const { mutate, isPending } = useMutation({
        mutationFn: followUser,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["profile", username] })
        }
    })
    return <button onClick={() => mutate(username)} disabled={isPending}>{isFollowing ? "Unfollow" : "Follow"}</button>
}

export default FollowButton