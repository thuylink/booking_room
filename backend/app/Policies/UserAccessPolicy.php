<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\Response;

class UserAccessPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, User $model): bool
    {
        // $userType = $user->usertype;
        // return $userType === 1 ? false : true;

        if ($user->usertype == 0 && $model->usertype == 1) {
            return false; // Không cho phép người dùng usertype 0 xem thông tin người dùng usertype 1
        }

        if ($user->usertype == 1 && $model->usertype == 0) {
            return false; // Không cho phép người dùng usertype 1 xem thông tin người dùng usertype 0
        }

        return true; 
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, User $model): bool
    {
        //
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, User $model): bool
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, User $model): bool
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, User $model): bool
    {
        //
    }
}
